import React from "react";

let data = [
  {
    img: "https://s3-alpha-sig.figma.com/img/0735/ebea/ea841e6608a7206e8f3e2cbcdcb911cf?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UZ9ESkJp7lcaRWZv1pozJ6zTDRZIs3wXyYgxPfOfqp~7tBbMlJx3tCSN9V~yUlc9l8RMiJq1LNGfqWwwcKbGYdA82JXntFZRSpNtH5~e5k0IdwYLhbzlQ~0XV2pUsFtdhYzGwb0ySFqhtYipbpqqwGsyaI0ipm7~FLJXppGr8C6s0y7srJCtgWMyj0XBG8p~7sydouPM0txqx69LaBhBk3Cd-aZwvFDZrGzKQ-dNf-VFf7D9nsHxvME7zTzrmnCgtJgEGMD82v76P7ohWex8zsXfQd7oPV35D08E-AFDAthBx2tOrOeb16YbetJqr-3~nlzVF2J4GcIMLfw1SZdtoQ__",
  },
];
const Backimg = ():any => {
  {
    data.map((e) => (
      <div>
        <img width={700} src={e.img} />
      </div>
    ));
  }
};

export default Backimg;
