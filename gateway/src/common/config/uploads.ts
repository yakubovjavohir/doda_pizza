import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "node:path";

export const staticModule = ServeStaticModule.forRoot({
    rootPath: join(process.cwd(), 'uploads'),
    serveRoot: '/uploads',
})