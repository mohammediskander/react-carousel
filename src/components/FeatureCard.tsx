import {PropsWithChildren} from "react";

export interface Feature {
    id: number;
    title: string;
    description: string;
    icon: string;
}

export interface FeatureCardProps extends PropsWithChildren {
  feature: Feature;
  grow?: boolean;
}
export function FeatureCard(props: FeatureCardProps) {
    return <div className={`flex bg-white md:h-72 h-60 rounded-md drop-shadow flex-col items-start p-6 gap-4 ${props.grow ? 'flex-1' : 'aspect-[2.8/3]'}`}>
        <div>
            <img src={props.feature.icon} alt={props.feature.title} className="w-16 h-16 mx-auto"/>
        </div>
        <div className="mt-5 flex flex-col gap-4">
            <div>
                <p className="text-base font-bold text-primary">{props.feature.title}</p>
            </div>
            <div>
                <p className="text-sm line-clamp-3 font-thin">{props.feature.description}</p>
            </div>
        </div>
    </div>
}
