import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt , Strategy } from "passport-jwt";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        //inside the super method, all the details filled will be used to decode the JWT token
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: "Key"
        });
    }

    // all the decoded method from super will be passed to validate method in the payload object

    validate(payload: any): any
    {
        return payload;
    }

}