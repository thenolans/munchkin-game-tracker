import nanoid from "nanoid";

export function Player(name, score) {
  this.id = nanoid();
  this.name = name || "";
  this.score = score || 1;
}
