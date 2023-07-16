import {supabase} from '../supabase';

export async function assignTeamToUser(team: string, userData) {
  const teamId = await getTeam(team);
  let {error} = await supabase
    .from('User')
    .update({teamId: teamId})
    .eq('email', userData.email);
}

async function getTeam(team: string) {
  let {data, error} = await supabase.from('Team').select('id').eq('name', team);
  if (data?.length) {
    return data[0].id;
  }
  return null;
}
