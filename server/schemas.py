from pydantic import BaseModel, Field


class Location(BaseModel):
    city: str
    country: str


class User(BaseModel):
    id: int
    fullName: str
    followed: bool
    status: str
    location: Location


class Contacts(BaseModel):
    facebook: str
    vk: str | None = None
    twitter: str | None = None
    instagram: str | None = None
    youtube: str | None = None
    github: str | None = None
    mainLink: str | None = None


class Photo(BaseModel):
    small: str | None = None
    large: str | None = None


class Profile(BaseModel):
    aboutMe: str
    contacts: Contacts
    lookingForAJob: bool
    lookingForAJobDescription: str
    fullName: str
    userId: int
    photos: Photo


class Follow(BaseModel):
    id: int
    status: bool


class FollowRequest(BaseModel):
    user_id: int = Field(..., description="User ID")
    follow: bool = Field(..., description="Follow status")


class FollowResponse(BaseModel):
    success: bool
    message: str
    follow_status: bool


class UsersResponse(BaseModel):
    users: list[User]


class ProfileResponse(BaseModel):
    profile: Profile


class FollowListResponse(BaseModel):
    follow: list[Follow]


class StatusRequest(BaseModel):
    status: str

class StatusResponse(BaseModel):
    status: str
    success: bool
