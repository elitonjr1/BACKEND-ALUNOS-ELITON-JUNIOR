import { PartialType } from '@nestjs/mapped-types';
import { CreateInscricaoDto } from './create-inscricao.dto';

export class UpdateInscricaoDto extends PartialType(CreateInscricaoDto) {
    //data_cancelamento: Date;
}
