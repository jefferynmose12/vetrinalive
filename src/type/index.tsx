export type ContentSignProps = {
    head : string,
    children : React.ReactNode
}

export type TextInputProps = {
    name : string,
    size : string,
    wide ? : boolean
}

export type ButtonSignProps = {
    text : string,
    wide ? : boolean,
    navigation ? : any
}

export type SocialProps = {
    social? : boolean,
    text : string,
    wide ? : boolean
}

export type StatusBarProps = {
    bg : string,
    text : any
}

export type DividerConProps = {
    wide ? : boolean
}

export type HeroHeadProps = {
    title : string,
    option ? : boolean,
    navigation ? : any
}

export type MainCardProps = {
    children : React.ReactNode, 
    link ? : string, 
    arrow ? : boolean,
    linkicon? : boolean,
    space ? : boolean,
    pr ? : boolean
}

export type CardHeadIconProps = {
    children : React.ReactNode,
    header ? : string,
    select ? : boolean
}

export type OrderListProps = {
    text : string,
    num : string
}

export type BoxCardProps = {
    children : React.ReactNode,
    bg : string,
    position ? : string,
    text : string,
    pl ? : boolean
}

export type LinkConProps = {
    link : string
}

export type BtnProductProps = {
    text : string,
    navigation : any
}

export type TabProps = {
    tab ? : boolean,
    text : string,
    wide ? : boolean,
    bcolor : string
}

export type FormCardProps = {
    children : React.ReactNode,
    header : string,
}

export type LabelProps = {
    header : string,
    icon? : boolean
}

export type CustomInputIconProps = {
    children : React.ReactNode,
    name ? : string,
    bg : string
}

export type CustomCheckProps = {
    text : string,
    state : boolean
}

export type OrderTableHeadProps = {
    children : React.ReactNode,
    arrow? : boolean
}

export type CustomSwitchProps = {
    select : boolean
}

export type SocialMediaProps = {
    option : boolean,
    text : string
}

export type TotalItemProps = {
    head : string,
    num : string,
    arrow ? : boolean
}