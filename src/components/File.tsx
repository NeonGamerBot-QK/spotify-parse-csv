import { Button, FileInput, Hero } from "react-daisyui";
import parseCSV from "../parse-csv";

export default function BeforeUpload({ setData  }: any) {
    return <Hero className="min-h-screen">
<div>
<Hero.Content className="text-center">
<div className="max-w-md">
    <h1 className="text-3xl font-bold mb-10">Spotify CSV Parser</h1>
<FileInput  accept=".csv" max={1} min={1} required onChange={async (e) => {
    // parseCSV(await e.target.files?[0].text())
    if(e.target.files && e.target.files[0]) {
const t = await e.target.files[0].text()
const csv = parseCSV(t)
console.log(t,csv)
setData(csv)
    }
}} />
<div className="mt-5 p-5 gap-2">
    <a className="btn btn-secondary" target="_blank" href="./template.csv" download={true}>Download Template </a>
    <Button onClick={() => {
        fetch('./example.csv').then(r=>r.text()).then(async t => {
            // const t = await e.target.files[0].text()
            const csv = parseCSV(t)
            console.log(t,csv)
            setData(csv)
        })
    }}>Use example file</Button>
</div>
</div>
</Hero.Content>
</div>
    </Hero>
}