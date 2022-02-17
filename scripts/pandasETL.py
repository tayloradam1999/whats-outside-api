import pandas as pd
from sqlalchemy import create_engine

# Load data from CSV into a pandas dataframe
# - Since there are no intentional inconsistencies in the data, we don't
#     need to worry about handling transformations before loading into the
#     database.
fd = pd.read_csv('./datasets/whats-outside-dataset.csv', sep=',', header=0)

# Create postgres engine for pandas to load data into
engine = create_engine('postgresql://postgres:hank@localhost:5432/postgres')

# Load data from datafrom into postgres engine
fd.to_sql('cities', engine, if_exists='replace', index=False)

# Close connection to database
engine.dispose()