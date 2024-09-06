import { Avatar } from '@mantine/core';

type SkillBadgeProps = {
  skills?: string[];  // Made the skills prop optional
};

const SkillBadge = ({ skills = [] }: SkillBadgeProps) => { // Default value of an empty array
  return (
    <>
      {skills.map((skill, index) => (
        <div key={index} className="flex hover:!shadow-[0_0_10px_1px_#64FFDA] gap-2 border border-textColor items-center rounded-2xl p-3">
          <Avatar variant="transparent" radius="xs" src={`Icons/${skill}.png`} />
          <div className="text-textColor text-md font-medium" >{skill}</div>
        </div>
      ))}
    </>
  );
};

type SkillCardProps = {
  title: string;
  skill?: string[]; // Made the skill prop optional
  isFirst?: boolean;
};

const SkillCard = (props: SkillCardProps) => {
  return (
    <div
      data-aos='fade-up'
      data-aos-duration='800'
      data-aos-easing='ease-in-sine'
      className={`${props.isFirst ? 'w-full' : '!w-[49%]'
        } shadow-[0_0_10px_0_#64FFDA50] rounded-2xl border !border-primaryColor p-5`}
    >
      <div className="text-3xl mb-4 text-white text-center font-bold">
        {props.title}
      </div>
      <div className='flex gap-3 mb-4  justify-center flex-wrap'>
        <SkillBadge skills={props.skill} />
      </div>
    </div>
  );
};

export default SkillCard;
