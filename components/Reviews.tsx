import Button from "./Button";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <div className="py-32 px-4 max-w-334 mx-auto">
      <div className="flex items-end justify-between mb-8">
        <h2 className="text-2xl md:text-[74px] font-semibold max-w-150 leading-[95%] md:uppercase">
          Reviews
        </h2>
        <Button>See all</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

const ReviewCard = ({
  title = "Good Quality",
  review = "I highly recommend shopping from kicks",
  rating = 5,
  maxRating = 5,
  reviewImage = "/review_image1.png",
  avatarImage = "/avatar1.png",
  avatarAlt = "Reviewer",
}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden w-89.5 md:w-106 max-h-[339px] md:max-h-[500px] shadow-sm flex flex-col">
      {/* Top content area */}
      <div className="p-4 md:p-8 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-foreground font-semibold text-xl md:text-2xl mb-1">{title}</h3>
            <p className="text-foreground text-sm md:text-[16px] font-openSans leading-snug">
              {review}
            </p>
          </div>

          {/* Avatar */}
          <div className="flex-shrink-0 w-12 md:w-16 h-12 md:h-16 rounded-full">
            <Image
              src={avatarImage}
              alt={avatarAlt}
              width={56}
              height={56}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Stars + rating */}
        <div className="flex items-center gap-1.5 mt-1">
          {Array.from({ length: maxRating }).map((_, i) => (
            <FaStar key={i} className="w-4.5 h-4.5 text-accent" />
          ))}
          <span className="text-foreground font-semibold text-sm md:text-[16px] ml-1 font-openSans">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Review photo */}
      <div className="w-full h-[429px] relative">
        <Image
          src={reviewImage}
          alt="Review photo"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};
