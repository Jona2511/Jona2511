// Renders assets/trophy.svg with the github-profile-trophy generator (darkhub theme, no frame or background, only earned trophies)
import { GithubApiService } from "./src/Services/GithubApiService.ts";
import { Card } from "./src/card.ts";
import { COLORS } from "./src/theme.ts";

const [username, outPath] = Deno.args;
const info = await new GithubApiService().requestUserInfo(username) as any;
if (!info || info.totalCommits === undefined) Deno.exit(2);
const card = new Card([], ["-?"], -1, 10, 110, 10, 10, true, true);
await Deno.writeTextFile(outPath, card.render(info, (COLORS as any).darkhub));
