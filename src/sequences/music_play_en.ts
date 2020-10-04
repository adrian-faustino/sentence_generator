/* Constants */
import { _artist_, _song_, _album_, _genre_ } from "../rulenames/music";
/* Util */
import array from "../util/arrayUtils";
import grammar from "../util/grammarUtils";

// BEGIN: Generate "I want to, I would like to ~"
const desire_verbs: string[] = ["want", "would like"];
const play_verbs_infinitive: string[] = ["listen to", "hear"];
const play_request_infinitive = (): string => {
  const _desire_verb: string = array.rndElem(desire_verbs);
  const _play_verb_infinitive: string = array.rndElem(play_verbs_infinitive);
  return `I ${_desire_verb} to ${_play_verb_infinitive}`;
};
// END: Generate "I want to, I would like to ~"

// BEGIN: Generate "Play me, put on for me ~"
const polite_request_verbs: string[] = ["could", "would", "can"];
const play_verbs_imperative: string[] = ["play", "put on"];
const play_request_imperative = (): string => {
  const _polite_request_verb = array.rndElem(polite_request_verbs);
  const _play_verb_imperative = array.rndElem(play_verbs_imperative);
  const optional_politeness = grammar.optional(`${_polite_request_verb} you`);
  return `${optional_politeness} ${_play_verb_imperative}`;
};
// END: Generate "Play me, put on for me ~"

export default (): string => {
  // This is used when generating a random request in infinitive or imperative form
  const rnd_request: string[] = [
    play_request_infinitive(),
    play_request_imperative(),
  ];

  // This is used when generating a random subject from a compiled list of artists, songs, etc
  const rnd_subject: string[] = [
    ..._artist_,
    ..._song_,
    ..._album_,
    ..._genre_.map((genre) => `${genre} ${grammar.optional("music")}`),
  ];

  // Return a randomly generated sentence based on the arrays above
  const sentence: string = `${array.rndElem(rnd_request)} ${array.rndElem(
    rnd_subject
  )}`;
  return sentence;
};
