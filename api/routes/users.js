import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Kullanıcı girişi başarıyla gerçekleşti");
// });
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Kullanıcı olarak giriş yaptınız ve hesabınızı silebilirsiniz")
// });
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Admin olarak giriş yaptınız ve tüm hesapları silebilirsiniz");
// });
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);
router.get("/", verifyAdmin, getUsers);
export default router;
