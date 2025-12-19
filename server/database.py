import json
import threading
from pathlib import Path
from typing import Any, ClassVar


class Database:
    _instance: ClassVar['Database | None'] = None
    _lock: ClassVar[threading.Lock] = threading.Lock()

    def __new__(cls, *args, **kwargs) -> 'Database':
        if cls._instance is None:
            with cls._lock:
                if cls._instance is None:
                    cls._instance = super().__new__(cls)
                    cls._instance._initialize()
        return cls._instance

    def _initialize(self) -> None:
        """Initialize database"""
        self.db_file = Path('db.json')
        self._data: dict[str, Any] = self._load_data()

    def _load_data(self) -> dict[str, Any]:
        """Load data from file"""
        try:
            if self.db_file.exists():
                with open(self.db_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            else:
                return self._create_default_db()
        except (json.JSONDecodeError, IOError) as e:
            print('Error loading database: %s' % e)

    @staticmethod
    def _create_default_db() -> dict[str, Any]:
        """Create default database structure"""
        return {
            "users": [
                {
                    "id": 1,
                    "fullName": "Dmitry",
                    "followed": False,
                    "status": "I am a boss",
                    "location": {
                        "city": "Minsk",
                        "country": "Belarus"
                    }
                },
                {
                    "id": 2,
                    "fullName": "Sasha",
                    "followed": True,
                    "status": "Status user 2",
                    "location": {
                        "city": "Moscow",
                        "country": "Russia"
                    }
                },
                {
                    "id": 3,
                    "fullName": "Johny",
                    "followed": False,
                    "status": "Status user 3",
                    "location": {
                        "city": "Miami",
                        "country": "United States"
                    }
                },
                {
                    "id": 4,
                    "fullName": "Maria",
                    "followed": True,
                    "status": "Status user 4",
                    "location": {
                        "city": "St. Petersburg",
                        "country": "Russia"
                    }
                }
            ],
            "profile": {
                "aboutMe": "я выполнил все ТЗ на 1001%",
                "contacts": {
                    "facebook": "facebook.com",
                    "vk": "vk.ru",
                    "twitter": "https://twitter.com",
                    "instagram": "instagram.com",
                    "youtube": None,
                    "github": "github.com",
                    "mainLink": None
                },
                "lookingForAJob": True,
                "lookingForAJobDescription": "Не ищу, а дурачусь",
                "fullName": "Guest no name",
                "userId": 1,
                "photos": {
                    "small": None,
                    "large": None
                }
            },
            "follow": [
                {
                    "id": 1,
                    "status": True
                },
                {
                    "id": 2,
                    "status": False
                },
                {
                    "id": 3,
                    "status": False
                },
                {
                    "id": 4,
                    "status": True
                }
            ]
        }

    def save(self) -> bool:
        """Save data to file"""
        with self._lock:
            try:
                with open(self.db_file, 'w', encoding='utf-8') as f:
                    json.dump(self._data, f, indent=2, ensure_ascii=False)
            except IOError as e:
                print('Error saving database: %s' % e)
                return False
            return True

    @property
    def data(self) -> dict[str, Any]:
        """Get data (read-only)"""
        return self._data.copy()

    def get_users(self) -> list[dict[str, Any]]:
        """Get all users"""
        return self._data.get('users', [])

    def get_profile(self) -> dict[str, Any]:
        """Get profile"""
        return self._data.get('profile', {})

    def get_follow(self) -> list[dict[str, Any]]:
        """Get all follow statuses"""
        return self._data.get('follow', [])

    def update_user_follow(self, user_id: int, follow_status: bool) -> bool:
        """Update user follow status"""
        users = self.get_users()

        for user in users:
            if user.get('id') == user_id:
                user['followed'] = follow_status
                return self.save()

        return False

    def update_follow_status(self, user_id: int, status: bool) -> bool:
        """Update or create user follow status"""
        follow_list = self._data.get('follow', [])

        for item in follow_list:
            if item.get('id') == user_id:
                item['status'] = status
                return self.save()

        follow_list.append({
            "id": user_id,
            "status": status,
        })
        self._data['follow'] = follow_list
        return self.save()

    def get_user_follow_status(self, user_id: int) -> bool:
        """Get user follow status"""
        follow_list = self._data.get('follow', [])

        # Find last status
        for item in reversed(follow_list):
            if item.get('id') == user_id:
                return item.get('status', False)

        return False

    def get_status(self, user_id: int) -> str | None:
        """Get profile status"""
        users = self.get_users()
        for user in users:
            if user.get('id') == user_id:
                return user.get('status', '')
        return None

    def update_status(self, user_id: int, status: str) -> bool:
        """Update or create user status"""
        users = self.get_users()
        for user in users:
            if user.get('id') == user_id:
                user['status'] = status
                return self.save()
        return False

    def reset(self) -> None:
        """Reset database to default data (for tests)"""
        self._data = self._create_default_db()
        self.save()


db = Database()
