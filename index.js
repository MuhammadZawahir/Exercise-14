"use strict";
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.guests = void 0;
exports.guests = ["Jinnah", "Adolf", "Einstien"];
for (let guest of exports.guests) {
    console.log(`Hey ${guest}, please try to come for dinner tonight.`);
}
