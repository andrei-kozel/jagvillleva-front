import { fetchAPI } from "@/lib/api";
import React from "react";
import { NewsCard } from "@/components/NewsCard";
import { Container } from "@/components/Container";

export default function News() {
  return (
    <Container>
      <p className="pt-24 mb-8 text-5xl font-bold text-gray-800 text-center md:text-left">
        Nyheter hemifrån
      </p>
      <NewsCard />
    </Container>
  );
}

export async function getStaticProps() {
  const [news] = await Promise.all([fetchAPI("/news")]);

  return {
    props: { news },
    revalidate: 1,
  };
}
