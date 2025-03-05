import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";

function Fallback({ error }: { error?: Error }) {
	return (
		<div className="h-svh">
			<div className="m-auto flex h-full w-full flex-col items-center justify-center gap-4">
				<Frown size={72} />
				<h1 className="text-4xl font-bold leading-tight">An Error Occured</h1>
				<p className="text-center text-muted-foreground">
					Oops! Something went wrong. <br />
					{error && <span className="text-red-500">{error.message}</span>}
				</p>
				<Button>Go Back</Button>
			</div>
		</div>
	);
}

export default Fallback;
