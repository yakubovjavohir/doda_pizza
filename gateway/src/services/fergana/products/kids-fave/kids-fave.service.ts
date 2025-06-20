import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, lastValueFrom } from 'rxjs';
import { CreateKidsFaveDto } from './dto/create-kids-fave.dto';
import { IKidsFaveService, ResData, ResDataList } from './interface/kids-fave.service';
import { PRODUCT_SERVICE_KIDS_FAVE_MODULE } from 'src/common/config/service.name';
import { ID } from 'src/common/TYPES';

@Injectable()
export class KidsFaveService implements OnModuleInit {
    private kidsFaveService: IKidsFaveService;

    constructor(
        @Inject(PRODUCT_SERVICE_KIDS_FAVE_MODULE) 
        private client: ClientGrpc, 

    ) {}

    onModuleInit() {
        this.kidsFaveService = this.client.getService<IKidsFaveService>('KidsFaveService');
    }

    async create(dto: CreateKidsFaveDto) {
        const data = await lastValueFrom(this.kidsFaveService.Create(dto));
        console.log(1);
        
        return {
            meta: data.meta,
            data: {
                id: data.data.id,
                type: data.data.type,
                spicy: data.data.spicy,
                kidsFriendly: data.data.kidsFriendly,
                recommendedAge: data.data.recommendedAge,
                createAt: data.data.createAt
            }
        };
    }

    async findAll() {
        const result = await lastValueFrom(this.kidsFaveService.FindAll({}));
        
        return {
            meta: result.meta,
            data: result.data.map((element) => ({
                id: element.id,
                type:element.type,
                spicy: element.spicy,
                kidsFriendly: element.kidsFriendly,
                recommendedAge: element.recommendedAge,
                product:element.product,
                createAt: element.createAt
            }))
        };
    }

    async findOne(id: ID) {
        const data = await lastValueFrom(this.kidsFaveService.FindById({ id }));
        
        return {
            meta: data.meta,
            data: {
                id: data.data.id,
                type:data.data.type,
                spicy: data.data.spicy,
                kidsFriendly: data.data.kidsFriendly,
                recommendedAge: data.data.recommendedAge,
                product:data.data.product,
                createAt: data.data.createAt
            }
        };
    }
    async remove(id: ID): Promise<Observable<ResData>> {
        return this.kidsFaveService.Delete({ id });
    }
}
