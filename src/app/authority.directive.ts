import { Directive, Input,TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
    selector:'[appAutority]'
})
export class AuthorityDirective{
    roles=["SELLER","BUYER"];
    @Input() set appAutority(condition : string){
        if(this.roles.includes(condition)){
            this.vcRef.createEmbeddedView(this.templateRef);
        }
        else{
            this.vcRef.clear();   
        }
    }
    constructor(private templateRef : TemplateRef<any>,private vcRef: ViewContainerRef){}
}