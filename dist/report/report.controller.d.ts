import { ReportService } from './report.service';
export declare class ReportController {
    private reportService;
    constructor(reportService: ReportService);
    getTotals(): Promise<import("./dtos/totals-report.dto").TotalsReportDto>;
    getReportByCategory(): Promise<any[]>;
}
