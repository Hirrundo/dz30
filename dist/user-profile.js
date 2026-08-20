"use strict";
const originalProfile = {
    id: 1,
    name: "Анна",
    email: "anna@example.com",
    age: 25,
    isActive: true
};
function updateUserProfile(updates) {
    const updatedProfile = Object.assign(Object.assign({}, originalProfile), updates);
    if (updatedProfile.age !== undefined &&
        typeof updatedProfile.age !== "number") {
        throw new Error("Возраст должен быть числом.");
    }
    return updatedProfile;
}
const updatedProfile = updateUserProfile({
    name: "Мария",
    age: 30
});
console.log("Обновлённый профиль:", updatedProfile);
const basicInfo = {
    id: updatedProfile.id,
    name: updatedProfile.name,
    email: updatedProfile.email
};
console.log("Основная информация:", basicInfo);
