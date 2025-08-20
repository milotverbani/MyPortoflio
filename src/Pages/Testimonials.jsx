import React, { useState } from "react";


import leartiParkImg from "/images/lp.jpg";


const testimonialList = [
  [
    {
      img: "https://scontent.fprn6-1.fna.fbcdn.net/v/t1.6435-9/83176123_3575298299165799_6511132985801048064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Fa6Wvhl4kMAQ7kNvwHrilCg&_nc_oc=AdkSwNPXaccDOr3inn0Z6wvSG27Gq71lS84lrKROGcsI5YT56n2wfw06n84ezuyCqwU&_nc_zt=23&_nc_ht=scontent.fprn6-1.fna&_nc_gid=yiIlksSg9-N4DT_dkenUbQ&oh=00_AfUNEDojCuTYlN-99r3_7aLYecS94cAcyeFDDIzriKxC9Q&oe=68CAB9C3",
      name: "Ylber Veliu",
      position: "Për Programera",
      content: "One of the best students of Bootcamp 13",
    },
    {
      img: leartiParkImg,
      name: "Learti Park",
      position: "Garden Company",
      content: "I am very satisfied and happy with Milot's work.",
    },
    {
      img: "https://scontent.fprn6-1.fna.fbcdn.net/v/t39.30808-6/494740555_2057218188022355_7775400625639651746_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0XrkTkhL9B0Q7kNvwFyO7J2&_nc_oc=AdmSMUT9mu4aCkVcWxvvba7sAHl0-QClZEESqOIkHR_vt7Mvwy9dgliQbQTTEQOznuA&_nc_zt=23&_nc_ht=scontent.fprn6-1.fna&_nc_gid=isFhrZT9y6El6Ozn2zP3Qw&oh=00_AfUAo-bZaj7prOcmzX-94gG3E4eVUr-k8mdru1wMeqvZtw&oe=68A948A9",
      name: "Urtim Shehu",
      position: "Software Engineer",
      content: "Miloti is a very excellent programmer and perfect at teamwork..",
    },
  ],
  [
    {
      img: "https://scontent.fprn6-1.fna.fbcdn.net/v/t1.6435-9/83176123_3575298299165799_6511132985801048064_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=Fa6Wvhl4kMAQ7kNvwHrilCg&_nc_oc=AdkSwNPXaccDOr3inn0Z6wvSG27Gq71lS84lrKROGcsI5YT56n2wfw06n84ezuyCqwU&_nc_zt=23&_nc_ht=scontent.fprn6-1.fna&_nc_gid=yiIlksSg9-N4DT_dkenUbQ&oh=00_AfUNEDojCuTYlN-99r3_7aLYecS94cAcyeFDDIzriKxC9Q&oe=68CAB9C3",
      name: "Ylber Veliu",
      position: "Për Programera",
      content: "One of the best students of Bootcamp 13",
    },
    {
      img: leartiParkImg,
      name: "Learti Park",
      position: "Garden Company",
      content: "I am very satisfied and happy with Milot's work.",
    },
    {
      img: "https://scontent.fprn6-1.fna.fbcdn.net/v/t39.30808-6/494740555_2057218188022355_7775400625639651746_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=0XrkTkhL9B0Q7kNvwFyO7J2&_nc_oc=AdmSMUT9mu4aCkVcWxvvba7sAHl0-QClZEESqOIkHR_vt7Mvwy9dgliQbQTTEQOznuA&_nc_zt=23&_nc_ht=scontent.fprn6-1.fna&_nc_gid=isFhrZT9y6El6Ozn2zP3Qw&oh=00_AfUAo-bZaj7prOcmzX-94gG3E4eVUr-k8mdru1wMeqvZtw&oe=68A948A9",
      name: "Urtim Shehu",
      position: "Software Engineer",
      content: "Miloti is a very excellent programmer and perfect at teamwork..",
    },
  ],
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section className="ezy__testimonial24 dark py-14 md:py-24 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-center text-center mb-6 md:mb-12">
          <div className="max-w-xl">
            <hr className="w-20 mb-4 border-gray-300 dark:border-gray-600 mx-auto" />
            <h2 className="text-[32px] font-bold">What They Say</h2>
          </div>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonialList.map((group, groupIndex) => (
              <div
                className="flex-shrink-0 w-full grid grid-cols-3 gap-6"
                key={groupIndex}
              >
                {group.map((testimonial, i) => (
                  <div className="col-span-3 lg:col-span-1" key={i}>
                    <div className="h-full p-6 xl:p-10">
                      <div className="flex items-center mb-6">
                        <div className="mr-3">
                          <img
                            src={testimonial.img}
                            alt={testimonial.name}
                            className="max-w-full h-auto rounded-full border"
                            width="85"
                          />
                        </div>
                        <div>
                          <h4 className="text-xl font-medium">{testimonial.name}</h4>
                          <p className="text-sm mb-2">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="opacity-75 mb-2">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-3 m-0 mt-12">
          {testimonialList.map((item, i) => (
            <button
              className={`w-12 cursor-pointer h-[7px] ${
                index === i ? "scale-125 bg-blue-600" : " bg-gray-400 dark:bg-slate-800"
              }`}
              key={i}
              onClick={() => handleSelect(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
