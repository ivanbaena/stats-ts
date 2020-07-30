import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

const summary = Summary.winsAlysisWithHtmlReport('Man United');

summary.buildAndPrintreport(matchReader.matches);
