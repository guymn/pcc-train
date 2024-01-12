import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';

@NgModule({
  exports: [
    NzDatePickerModule,
    NzInputNumberModule,
    NzFormModule,
    NzModalModule,
    NzSpaceModule,
    NzSelectModule,
    NzGridModule,
    NzLayoutModule,
    NzButtonModule,
    NzInputModule,
    NzTableModule,
    NzDividerModule,
    NzIconModule,
  ],
})
export class NgZorroAntdModule {}
