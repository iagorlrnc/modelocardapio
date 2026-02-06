-- Adicionar coluna is_active à tabela users para suportar soft-delete
ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT true;

-- Criar índice para melhor performance nas queries
CREATE INDEX idx_users_is_active ON users(is_active);
