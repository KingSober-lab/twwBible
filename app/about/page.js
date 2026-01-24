import Image from "next/image";

export default function Page() {
  return (
    <div>
      <div className=" p-[4rem]">
        <div className="flex justify-center">
          <Image
            alt="picture"
            width={250}
            height={200}
            src="/me.jpg"
            placeholder="blur"
            blurDataURL="/me.jpg"
          />
        </div>
        <div className="text-center mb-5 italic">
          Sir Sober-The Lord&apos;s Servant
        </div>
        <div className="text-justify space-y-4">
          <p>
            The Working Word Ministry TV is a faith-based ministry dedicated to
            spreading the life-transforming truth of God’s Word through the
            power of the Holy Spirit. Founded on the belief that &apos;Your Word
            is Spirit,&apos; the ministry seeks to bring hope, light, and
            understanding to people around the world by teaching the
            uncompromised Word of God.
          </p>
          <p>
            Through clear, Spirit-led teaching and biblical insights, The
            Working Word Ministry TV helps believers grow in their relationship
            with God, discover their divine purpose, and live victoriously
            through faith in Jesus Christ. The ministry emphasizes practical
            Christianity — walking daily in the truth of the Scriptures and
            allowing the Word of God to shape character, decisions, and destiny.
          </p>
          <p>
            Founded with a vision to use modern technology to reach souls for
            Christ, The Working Word Ministry TV produces online messages,
            Bible-based videos, and inspirational content that touch hearts and
            renew minds. Each message focuses on revealing God’s love, mercy,
            and the transforming power of His Word in everyday life.
          </p>
          <p>
            At the heart of the ministry lies a deep conviction: the Word of God
            still works today — healing, guiding, and strengthening all who
            believe. The ministry continues to inspire viewers to live by faith,
            walk in love, and reflect the light of Christ in a darkened world.
          </p>
        </div>
      </div>
    </div>
  );
}
