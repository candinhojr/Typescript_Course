import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

export function errorHandlerApi(error: ErrorRequestHandler, request: Request, response: Response, next: NextFunction) {
  console.error('API error handler foi executada: ${error}');
  response.status(500).json({
    errorCode: 'ERR-001',
    message: 'Erro Interno do Servidor'
  });
}
