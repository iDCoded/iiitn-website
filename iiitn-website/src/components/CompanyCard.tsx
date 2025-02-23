interface CompanyCardProps {
  title: string;
  imageSrc: string;
  description: string;

}
function CompanyCard({ title, imageSrc, description }: CompanyCardProps) {
  return (
    <>

      <div className="flex flex-col bg-white border shadow-sm rounded-xl">
        <img className="w-full h-auto rounded-t-xl" src={imageSrc} alt={title} />
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-bold text-gray-800">
            {title}
          </h3>

          <a className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 decoration-2 hover:text-blue-700 hover:underline focus:underline focus:outline-none focus:text-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-600 dark:focus:text-blue-600" href="#">
            Visit
            <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>
        </div>
      </div>

    </>
  )
}

export default CompanyCard