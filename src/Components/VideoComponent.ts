import ContainerComponent from "./ContainerComponent";
import IAttributeDeclaration from "grimoirejs/ref/Node/IAttributeDeclaration";

export default class VideoComponent extends ContainerComponent{
  public static attributes:{[key:string]:IAttributeDeclaration} = {
    inBuild:{
      converter:"Number",
      default:0
    },
    src:{
      converter:"String",
      default:0
    }
  };
  private video:HTMLVideoElement;
    public $mount(){
      super.$mount();
      const video = this.targetElement as HTMLVideoElement;
      video.src = this.getAttribute("src");
      video.loop = true;
      this.video = video;
    }

    public $slideStart(){
      this.video.play();
    }

    public generateTag():HTMLElement{
      return document.createElement("video");
    }
}
