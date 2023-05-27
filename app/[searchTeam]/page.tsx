import React from "react";
import getwikiResults from "@/lib/getwikiResults";

type TProps = {
  params: {
    searchTearm: string;
  };
};

export async function generateMetadate({ params: { searchTearm } }: TProps) {
  const wikiData: Promise<TSearchResult> = getwikiResults(searchTearm);
  const data = await wikiData;
  const displayTerm = searchTearm.replaceAll('%20', ' ');

  if(!data?.query?.pages){
    return{
        title:`${displayTerm} Not Found`
    }
  }
  return{
    title:displayTerm,
    description:`Search results for ${displayTerm}`
  }
}

export default async function searchResults({
  params: { searchTearm },
}: TProps) {
  const wikiData: Promise<TSearchResult> = getwikiResults(searchTearm);
  const data = await wikiData;
  const results: TResult[] | undefined = data?.query?.pages;
  const content = (
    <main className="bg-slate-20 mx-auto max-w-lg py-1 min-h-screen">
      {results ? (
        Object.values(results).map((result) => <p>{JSON.stringify(result)}</p>)
      ) : (
        <h2 className="p-2 text-xl">{`${searchTearm} Not Found`}</h2>
      )}
    </main>
  );
  return content;
}
