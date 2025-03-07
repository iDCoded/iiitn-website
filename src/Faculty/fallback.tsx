import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Frown } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Fallback({ error }: { error?: Error }) {
	const navigate = useNavigate();

	return (
		<div className="h-svh">
			<div className="m-auto flex h-full w-full flex-col items-center justify-center gap-4">
				<Frown size={72} />
				<h1 className="text-4xl font-bold leading-tight">An Error Occured</h1>
				<p className="text-center text-muted-foreground">
					Oops! Something went wrong. <br />
				</p>
				{/* Accordion for showing error details */}
				{error && (
					<Accordion
						type="single"
						collapsible
						className="w-[90%] max-w-md text-red-600">
						<AccordionItem value="error-details">
							<AccordionTrigger>Error Details</AccordionTrigger>
							<AccordionContent>
								<div className="overflow-auto max-h-60 bg-red-100 p-3 rounded-md text-sm text-red-600">
									{error.message}
								</div>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				)}
				<div className="flex flex-row gap-4">
					<Button
						onClick={() => {
							navigate("/faculty");
							window.location.reload();
						}}>
						Back to Faculty Panel
					</Button>
					<Button
						variant={"secondary"}
						onClick={() => {
							navigate("/");
							window.location.reload();
						}}>
						Back to Home
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Fallback;
