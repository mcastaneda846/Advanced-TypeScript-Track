var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getUsers, createUser, updateUser, deleteUser } from "./api.js";
function test() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("GET : ", yield getUsers());
        const newUser = yield createUser("Pedro");
        console.log("POST: ", newUser);
        console.log("GET : ", yield getUsers());
        const updated = yield updateUser(newUser.id, "Pedro Updated");
        console.log("PUT: ", updated);
        console.log("GET : ", yield getUsers());
        const deleted = yield deleteUser(newUser.id);
        console.log("DELETE: ", deleted);
        console.log("FINAL: ", yield getUsers());
        const newUser1 = yield createUser("Maribel"); // Se ve reflejado en el backend
    });
}
test();
//# sourceMappingURL=index.js.map