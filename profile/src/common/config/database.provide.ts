import { TypeOrmModule } from "@nestjs/typeorm";
import { ProfileEntity } from "src/modules/profile/entities/profile.entity";



const databaseProvide = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5433,
    username: 'postgres',
    password: '23032006yj',
    database: 'doda_pizza_server',
    entities: [ProfileEntity],
    synchronize: true,
})

export {databaseProvide}