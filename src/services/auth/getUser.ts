import {supabase} from "../supabase";

export const getTeamByLoggedInUser = async (userId: number) => {
    let {data, error} = await supabase
        .from("User")
        .select("teamId")
        .eq("id", userId);

    if (error) {
        console.error(error);
        return;
    }

    let teamId;
    teamId = JSON.stringify(data);
    // console.warn(teamId)

    return teamId;
}