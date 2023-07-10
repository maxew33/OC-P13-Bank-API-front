interface UserData {
    email: string
    firstName: string
    lastName: string
    createdAt: string
    updatedAt: string
    id: string
}

interface UserProfile {
    data: UserData | null
}

export default UserProfile
