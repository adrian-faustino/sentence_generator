/* Constants */
import { _artist_, _song_, _album_, _genre_ } from "../rulenames/music";
/* Util */
import array from "../util/arrayUtils";
import grammar from "../util/grammarUtils";

// ~ga kiktai
const desire_verbs_base: string[] = ["kiki", "nagashi"];
const play_request_desire_form = (): string => {
  const _desire_verb_base: string = array.rndElem(desire_verbs_base);
  return `ga ${_desire_verb_base} tai`;
};

// ~nagashite
const request_te_ending: string[] = [
  "kudasai",
  "kureru",
  "kurenai",
  "kure",
  "hoshii",
];
const request_base_ending: string[] = ["te", "na", "nasai"];
const play_verbs_imperative: string[] = [
  "nagase",
  "nagashite +++request_te_ending",
  "nagashi +++request_base_ending",
];
const play_request_imperative_form = (): string => {
  let _play_verb_imperative: string = array.rndElem(play_verbs_imperative);

  if (_play_verb_imperative.includes("+++")) {
    let [base, ending_type]: string[] = _play_verb_imperative.split("+++");

    switch (ending_type) {
      case "request_te_ending":
        _play_verb_imperative = base + array.rndElem(request_te_ending);
        break;
      case "request_base_ending":
        _play_verb_imperative = base + array.rndElem(request_base_ending);
        break;
    }
  }

  return `wo ${_play_verb_imperative}`;
};

export default () => {
  // This is used when generating a random request in infinitive or imperative form
  const rnd_request: string[] = [
    play_request_desire_form(),
    play_request_imperative_form(),
  ];

  // This is used when generating a random subject from a compiled list of artists, songs, etc
  const rnd_subject: string[] = [
    ..._artist_,
    ..._song_,
    ..._album_,
    ..._genre_.map((genre) => `${genre} ${grammar.optional("kei")}`),
  ];

  // Return a randomly generated sentence based on the arrays above
  const sentence: string = `${array.rndElem(rnd_subject)} ${array.rndElem(
    rnd_request
  )}`;
  return sentence;
};
