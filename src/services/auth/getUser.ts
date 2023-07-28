import {supabase} from "../supabase";

type Team = {
    name: string
}

export const getTeamByLoggedInUser = async (userId: number) => {
    let {data, error} = await supabase
        .from("User")
        .select("Team (name)")
        .eq("id", userId);

    if (error) {
        console.error(error);
        return '';
    }

    let teamName: string = '';
    if (data) {
        let team: Team = data[0].Team[0].name;
        teamName = team.name;
    }
    return teamName;
}
