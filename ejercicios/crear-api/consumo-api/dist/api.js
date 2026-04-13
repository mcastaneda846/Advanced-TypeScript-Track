var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const BASE_URL = "http://localhost:3000/api/users";
// GET
export function getUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(BASE_URL);
        return res.json();
    });
}
// POST
export function createUser(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(BASE_URL, {
            method: "POST",
            body: JSON.stringify({ name }),
        });
        return res.json();
    });
}
// PUT
export function updateUser(id, name) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(BASE_URL, {
            method: "PUT",
            body: JSON.stringify({ id, name }),
        });
        return res.json();
    });
}
// DELETE
export function deleteUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(BASE_URL, {
            method: "DELETE",
            body: JSON.stringify({ id }),
        });
        return res.json();
    });
}
//# sourceMappingURL=api.js.map