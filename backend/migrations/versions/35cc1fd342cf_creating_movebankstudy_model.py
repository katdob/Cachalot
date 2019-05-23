"""creating MovebankStudy model
Revision ID: 35cc1fd342cf
Revises: 9484a87886a2
Create Date: 2019-07-16 13:23:29.898832
"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '35cc1fd342cf'
down_revision = '9484a87886a2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movebank_study',
    sa.Column('study_id', sa.Integer(), nullable=False),
    sa.Column('species_common_name', sa.String(length=120), nullable=True),
    sa.Column('species_scientific_name', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('study_id')
    )
    op.create_index(op.f('ix_movebank_study_species_common_name'), 'movebank_study', ['species_common_name'], unique=False)
    op.create_index(op.f('ix_movebank_study_species_scientific_name'), 'movebank_study', ['species_scientific_name'], unique=False)
    op.drop_index('ix_user_username', table_name='user')
    op.drop_column('user', 'username')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('user', sa.Column('username', sa.VARCHAR(length=64), nullable=True))
    op.create_index('ix_user_username', 'user', ['username'], unique=1)
    op.drop_index(op.f('ix_movebank_study_species_scientific_name'), table_name='movebank_study')
    op.drop_index(op.f('ix_movebank_study_species_common_name'), table_name='movebank_study')
    op.drop_table('movebank_study')
    # ### end Alembic commands ###
