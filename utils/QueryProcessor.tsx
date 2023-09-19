export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew id")) {
    return (
      "anastasr" 
    );
  }
  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const MultMatch = query.match(/What is (\d+) multiplied by (\d+)/);
  if (MultMatch) {
    const x: number = parseInt(MultMatch[1]);
    const y: number = parseInt(MultMatch[2]);
    return (x*y).toString();
  }

  const MinusMatch = query.match(/What is (\d+) minus (\d+)/);
  if (MinusMatch) {
    const x: number = parseInt(MinusMatch[1]);
    const y: number = parseInt(MinusMatch[2]);
    return (x-y).toString();
  }

  return "";
}
