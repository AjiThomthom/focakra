export function CreditSection() {
  return (
    <div className="w-full flex-col md:flex-row flex justify-end my-3 bg-gradient-to-l from-[#43871F] via-[#87BD69] to-[#4CBC0F] px-2 py-3 rounded-md font-serif">
      <div className="text-sm">
        <span className="flex flex-col md:flex-row text-center md:text-start">
          <p>Project Start:</p>
          <p> 27 July 2026</p>
        </span>
        <span className="flex flex-col md:flex-row text-center md:text-start">
          <p>Latest Update:</p>
          <p> 28 September 2026</p>
        </span>

        <span className="flex flex-col md:flex-row text-center md:text-start">
          <p>Created by:</p>
          <p>Informatic Students of Pelita Bangsa</p>
        </span>
      </div>
    </div>
  );
}
