"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlog = exports.createBlog = exports.loginValidation = exports.signUpValidation = void 0;
const zod_1 = require("zod");
// zod Schema
exports.signUpValidation = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string().email(),
    password: zod_1.z.number().min(6)
});
exports.loginValidation = zod_1.z.object({
    email: zod_1.z.string().email(),
    password: zod_1.z.number().min(6)
});
exports.createBlog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string()
});
exports.updateBlog = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
    id: zod_1.z.string()
});
