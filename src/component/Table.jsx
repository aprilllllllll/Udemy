import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function Table({ input }) {
  var results = calculateInvestmentResults(input);

  return (
    <>
      {console.log(results)}
      <table>
        <tr>
          <th>year</th>
          <th>Investment Value</th>
          <th>interest(Year)</th>
        </tr>
        {results.map(result => (
          <tr key={result.year}>
            <td>{result.year}</td>
            <td>{formatter.format(result.valueEndOfYear)}</td>
            <td>{formatter.format(result.interest)}</td>
         
          </tr>
        ))}
      </table>
    </>
  );
}
