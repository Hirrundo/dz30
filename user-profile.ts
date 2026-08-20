
interface UserProfile {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
}


type UserBasicInfo = Pick<UserProfile, "id" | "name" | "email">;


const originalProfile: UserProfile = {
    id: 1,
    name: "Анна",
    email: "anna@example.com",
    age: 25,
    isActive: true
};

function updateUserProfile(
    updates: Partial<UserProfile>
): Readonly<Required<UserProfile>> {

    const updatedProfile = {
        ...originalProfile,
        ...updates
    };

  
    if (updatedProfile.age !== undefined &&
        typeof updatedProfile.age !== "number") {
        throw new Error("Возраст должен быть числом.");
    }

  
    return updatedProfile as Readonly<Required<UserProfile>>;
}


const updatedProfile = updateUserProfile({
    name: "Мария",
    age: 30
});

console.log("Обновлённый профиль:", updatedProfile);


const basicInfo: UserBasicInfo = {
    id: updatedProfile.id,
    name: updatedProfile.name,
    email: updatedProfile.email
};

console.log("Основная информация:", basicInfo);