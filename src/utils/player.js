import nanoid from "nanoid";

export function Player({ name, sex, level, bonus, avatar = "dragon" } = {}) {
  this.id = nanoid();
  this.name = name || "";
  this.sex = sex || "F";
  this.originalSex = sex || "F";
  this.level = level || 1;
  this.bonus = bonus || 0;
  this.avatar = avatar;
}
