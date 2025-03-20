import Image from "next/image";
import SearchForm from "../../components/searchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    { 
    _createdAT: new Date(), 
    views: 55, 
    author: { _id: 1, name:'ckr' },
    description: "This is a Description, This post is all about robots and new tech",
    category:"Robots",
    title:"We Robots",
    image:"https://placehold.co/600"
   },];


  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your StartUp,
          <br /> Connect With Entreprenenurs{" "}
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competition
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30 semibold">
          {query ? `Search results for"${query}"` : "All StartUps"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ?(
            posts.map((post: StartupCardType,index: number)=>(<StartupCard key={post?._id} post={post}/>))
          ):(<p className="no-results">No startups found</p>)}
        </ul>
      </section>
    </>
  );
}
