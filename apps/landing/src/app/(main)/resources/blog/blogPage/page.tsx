import { notFound } from "next/navigation"

async function getPost(slug: string) {
  const res = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}`, { next: { revalidate: 10 } })
  const data = await res.json()
  return data.data[0]
}

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{post.attributes.title}</h1>
      <div className="prose lg:prose-xl" dangerouslySetInnerHTML={{ __html: post.attributes.content }} />
    </main>
  )
}

