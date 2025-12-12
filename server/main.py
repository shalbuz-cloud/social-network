from math import ceil

from fastapi import FastAPI, HTTPException, status, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from database import db
from schemas import (
    UsersResponse,
    FollowRequest,
    FollowResponse,
    ProfileResponse,
    FollowListResponse, Follow,
)

app = FastAPI(
    title='Fake social-network API',
    version='1.0.0',
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        'http://localhost:5173', 'https://localhost:5173',
        'http://localhost:5174', 'https://localhost:5174',
        'http://127.0.0.1:5173', 'https://127.0.0.1:5173',
        'http://127.0.0.1:5174', 'https://127.0.0.1:5174',
    ],
    # allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=[
        # '*',
        'API-KEY',
        'Authorization',
        'Content-Type',
        'Accept',
    ],
)


@app.get('/')
async def root() -> dict[str, str]:
    return {
        "message": "Welcome to Fake Social Network API",
        "version": "1.0.0",
        "docs": "/docs",
        "redoc": "/redoc"
    }


@app.get('/api/v1/users')
async def get_users(
        page: int = Query(default=1, ge=1, description='Page number (starting from 1)'),
        limit: int = Query(default=10, ge=1, le=100, description='Items per page (1-100)'),
        total: bool = Query(default=True, description='Include total count in response'),
) -> JSONResponse:
    """
    Get users with pagination

    :param page: Page number (starting from 1)
    :param limit: Number of users on page
    :param total: Include total count in response
    """
    try:
        all_users = db.get_users()
        total_count = len(all_users)

        # Calculate indexes for pagination
        start_idx = (page - 1) * limit
        end_idx = start_idx + limit

        paginated_users = all_users[start_idx:end_idx]
        total_pages = ceil(total_count / limit) if limit > 0 else 0

        response = {
            'users': paginated_users,
            'page': page,
            'limit': limit,
            'total_pages': total_pages,
            'has_next': page < total_pages,
            'has_prev': page > 1
        }

        if total:
            response['total_count'] = total_count

        return JSONResponse(response, status.HTTP_200_OK)

    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Error getting users: {str(e)}'
        )



@app.get('/api/v1/users/all', response_model=UsersResponse)
async def get_all_users() -> UsersResponse:
    """Get all users"""
    users = db.get_all_users()
    return UsersResponse(users=users)


@app.get('/api/v1/profile', response_model=ProfileResponse)
async def get_profile() -> ProfileResponse:
    """Get profile info"""
    profile = db.get_profile()
    return ProfileResponse(profile=profile)


@app.get('/api/v1/follow', response_model=FollowListResponse)
async def get_follow_statuses() -> FollowListResponse:
    """Get all followed statuses"""
    follow = db.get_follow()
    return FollowListResponse(follow=follow)


@app.get('/api/v1/follow/{user_id}', response_model=Follow)
async def get_user_follow_status(user_id: int) -> Follow:
    """Get user followed status"""
    _status = db.get_user_follow_status(user_id)
    return Follow(id=user_id, status=_status)


@app.post('/api/v1/follow', response_model=FollowResponse, status_code=status.HTTP_200_OK)
async def create_or_update_follow(follow_request: FollowRequest) -> FollowResponse:
    """
    Create or update a follow

    - **user_id**: ID of the user
    - **follow**: True - follow, False - unfollow
    """
    try:
        # Update status in database
        db.update_user_follow(follow_request.user_id, follow_request.follow)
        db.update_follow_status(follow_request.user_id, follow_request.follow)

        return FollowResponse(
            success=True,
            message=f'Follow status updated for user {follow_request.user_id}',
            follow_status=follow_request.follow
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Error updating follow status: {str(e)}'
        )


@app.post('/api/v1/follow/{user_id}', response_model=FollowResponse, status_code=status.HTTP_201_CREATED)
async def create_follow(user_id: int) -> FollowResponse:
    """Create follow"""
    try:
        db.update_user_follow(user_id, True)
        db.update_follow_status(user_id, True)

        return FollowResponse(
            success=True,
            message=f'Follow status set to True for user {user_id}',
            follow_status=True
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Error creating follow status: {str(e)}'
        )


@app.delete('/api/v1/follow/{user_id}', response_model=FollowResponse, status_code=status.HTTP_200_OK)
async def delete_follow(user_id: int) -> FollowResponse:
    """
    Delete a follow status for user
    Set follow status to False
    """
    try:
        db.update_user_follow(user_id, False)
        db.update_follow_status(user_id, False)

        return FollowResponse(
            success=True,
            message=f'Follow status set to False for user {user_id}',
            follow_status=False
        )
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Error deleting follow status: {str(e)}'
        )


@app.post('/api/v1/reset')
async def reset_database() -> dict[str, str]:
    """
    Reset database to default
    ⚠️ Development only!
    """
    try:
        db.reset()
        return {'message': 'Database reset successfully'}
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f'Error resetting database: {str(e)}'
        )


if __name__ == "__main__":
    import uvicorn

    # Check load database before start
    print('Database loaded successfully')
    print(f'Users count: {len(db.get_users())}')
    print(f'Follow records: {len(db.get_follow())}')

    uvicorn.run(
        'main:app',
        host="0.0.0.0",
        port=8000,
        reload=True,
    )
