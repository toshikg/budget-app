import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller('report')
export class ReportController {
  constructor(private reportService: ReportService) {}

  @Get('/totals')
  getTotals() {
    return this.reportService.generateTotalsReport();
  }

  @Get('/by-category')
  getReportByCategory() {
    return this.reportService.getSpendingByCategories();
  }
}
