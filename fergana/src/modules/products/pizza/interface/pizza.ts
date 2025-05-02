
export interface IDoughOption {
    type: 'Traditional' | 'Thin';
}

export interface IImageOption {
    sm:string,
    imageUrl:string,
    type:IDoughOption
}