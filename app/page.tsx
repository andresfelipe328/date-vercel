import Client from "@/components/Client";

export default function Home() {
  const date = new Date();
  console.log(date);
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
      <div className="flex flex-col gap-5 bg-red-200 rounded-md shadow-sm p-4">
        <h1 className="mx-auto">Server Side Component</h1>
        <p>toISOString: {date.toISOString()}</p>
        <p>toISOString [date]: {date.toISOString().slice(0, 10)}</p>
        <p>toDateString: {date.toDateString()}</p>
        <p>toTimeString: {date.toTimeString()}</p>
        <p>toLocaleDateString: {date.toLocaleDateString()}</p>
        <p>toLocaleTimeString: {date.toLocaleTimeString()}</p>
      </div>
      <Client />
    </main>
  );
}
