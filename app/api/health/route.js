// آدرس سلامت برای health check پلتفرم: /api/health
export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json({ status: 'ok' });
}
